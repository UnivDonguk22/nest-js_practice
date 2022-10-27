import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

/*
    boards 모듈에 접근할 때의 엔드포인트 : '/boards' 이다.
    기능별로 모듈을 달리 정의하고, 엔드포인트도 달리 정의한다.
*/
@Controller('boards')
export class BoardsController{
    /*
        타입스크립트의 변수 선언은
        name: String
        name: Int
        name: {변수 타입}
        다음과 같이 진행된다.
    */

    // 생성메소드 - 초기화 & 객체 생성을 담당한다.
    constructor(private boardsService: BoardsService){
    }


    /*
        게시글 조회 API Part. 1-1 (로컬 변수에 게시글 저장한 것)
    */
    // 엔드포인트 : '/'
    @Get()
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }

    
    




    

}