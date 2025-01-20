const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// 회원가입 함수
const signUp = asyncHandler(async (req, res) => {
    const { id, password } = req.body;

    // 1. 입력 값이 모두 존재하는지 체크
    if (!id || !password) {
        res.status(400);
        throw new Error("모든 필드를 입력해주세요");
    }

    // 2. id 중복 확인
    const userExists = await User.findOne({ id });
    if (userExists) {
        res.status(400);
        throw new Error("이미 존재하는 아이디입니다")
    }

    // 3. 비밀번호 해싱
    const salt = await bcrypt.genSalt(10);                      // Salt생성성
    const hashedPassword = await bcrypt.hash(password, salt);   // 비밀번호 해싱

    // 4. 새로운 사용자 생성
    const user = await User.create({
        id,
        password: hashedPassword,
    });

    // 5. 회원가입 성공/실패 시 응답
    if (user) {
        res.status(201).json({
            _id: user.id,
            id: user.id,
            message: "회원가입에 성공했습니다",
        })
    } else {
        res.status(400);
        throw new Error("회원가입에 실패했습니다");
    }

});

// 로그인 함수
const login = asyncHandler(async (req, res) => {
    const { id, password } = req.body;

    // 1. 입력 값이 모두 존재하는지 체크
    if (!id || !password) {
        res.status(400);
        throw new Error("아이디와 비밀번호를 입력해주세요");
    }

    // 2. 사용자 존재여부 확인
    const user = await User.findOne({ id });
    if (!user) {
        res.status(400);
        throw new Error("존재하지 않는 아이디 입니다");
    }

    // 3. 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        res.status(400);
        throw new Error("비밀번호가 올바르지 않습니다");
    }

    // 4. JWT 생성
    const token = jwt.sign(
        { id: user.id },        // 페이로드에 사용자 id 포함
        process.env.JWT_SECRET, // JWT 비밀키
        { expiresIn: "30d" }    // 토큰 유효기간 설정
    )

    // 5. 세션에 사용자 id와 JWT 토큰 저장
    req.session.id = user.id;
    req.session.token = token;

    // 6. 로그인 성공 시 응답
    res.status(200).json({
        _id: user.id,
        id: user.id,
        token,
        message: "로그인에 성공했습니다",
    })
})