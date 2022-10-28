import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

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

    /*
        게시글 생성 API Part. 1-2
    */
    // 엔드포인트 : '/'
    // dto 사용
    @Post()
    createBoard(
        @Body() createBoaradDto: CreateBoardDto
        ): Board {
            return this.boardsService.createBoard(createBoaradDto);
        }
    /*
    dto 사용 x
    @Post()
    createBoard(
        @Body('title') title: string,
        @Body('decription') description: string,
        ): Board {
            return this.boardsService.createBoard(title, description);
        }
    */

    /*
        특정 ID 게시글 조회 API Part. 1-3
    */
    // 엔드포인트 : '/:id'
    // Params : Path Variable {id}
    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    /*
        특정 ID 게시글 삭제 API Part. 1-4
    */
   // 엔드포인트 : '/:id'
   // Params : Path Variable {id}
   @Delete('/:id')
   deleteBoard(@Param('id') id: string): void {
       this.boardsService.deleteBoard(id);
   }

    /*
        특정 ID 게시글 상태 업데이트 API Part. 1-5
    */
   @Patch('/:id/status')
   updateBoardStatus(
       @Param('id') id: string,
       @Body('status') status: BoardStatus
   ): Board {
       return this.boardsService.updateBoardStatus(id, status);
   }










    

}