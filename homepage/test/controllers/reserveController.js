const asyncHandler = require("express-async-handler");
const Reserve = require("../models/reserveModels");

// 예약 생성 함수
const createReserve = asyncHandler(async (req, res) => {
    const { reserve_id, guest, check_in, check_out } = req.body;

    // 필수 정보 확인
    if (!reserve_id || !guest || !check_in || !check_out) {
        res.status(400);
        throw new Error("모든 필수 정보를 입력해주세요");
    }

    // 예약 생성
    const reserve = new Reserve({
        reserve_id,
        guest,
        check_in,
        check_out,
        is_payment: false   // 무조건 false로 설정
    });

    // 데이터베이스에 저장
    const createdReserve = await reserve.save();

    // 성공적으로 생성된 예약 반환
    res.status(201).json({
        message: "예약이 성공적으로 생성되었습니다.",
        reserve: createdReserve,
    });
});


// 예약 접수 함수(결제확인버튼을 클릭하고나서 수행되는 함수)
const confirmReserve = asyncHandler(async (req, res) => {
    const { reserve_id } = req.body;

    // 필수 정보 확인
    if (!reserve_id) {
        res.status(400);
        throw new Error("예약 id가 존재하지 않습니다.");
    }

    // 예약 찾기
    const reserve = await Reserve.findOne({ reserve_id });
    if (!reserve) {
        res.status(404);
        throw new Error("해당 예약을 찾을 수 없습니다");
    }

    // 예약 상태 업데이트(결제 여부)
    reserve.is_payment = true;
    const updatedReserve = await reserve.save();

    // 성공적으로 업데이트된 예약 반환
    res.status(200).json({
        message: "예약이 결제 확인되었습니다",
        reserve: updatedReserve,
    })

})

module.exports = { createReserve, confirmReserve }