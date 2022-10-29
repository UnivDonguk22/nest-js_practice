import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board.model";

// PipeTransform 인터페이스를 토대로 커스텀 파이프 구성
export class BoardStatusValidationPipe implements PipeTransform {

    // Status 값에 대해 규정함. - 모델 객체에 정의한 게시글 데이터 규칙을 토대로 pipe에서도 규정함.
    // 개발에 대한 규칙을 구조화 -  체계적인 개발가능
    // readonly 타입은 외부에서 읽기로만 가능한 타입이다.
    readonly StatusOption = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    // transform() 메소드를 이용해 커스텀 파이프를 구현한다.
    transform(value: any, metadata: ArgumentMetadata){
        value = value.toUpperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in the status options`);
        }

        return value;
    }

    // Params의 Status와 게시글 Status가 데이터형태가 일치한 지 검사
    private isStatusValid(status: any){
        const index = this.StatusOption.indexOf(status);
        return index !== -1;
    }
}