import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {


    /* 
        게시글 조회 API
        해당 API는 데이터베이스가 필요로하지만,
        NestJS 첫 사용이기도 해서, DB를 연동하지 않고,
        로컬 변수로 임의로 게시글 객체를 만들어서
        게시글 조회 API를 구성한다.

        ** DB를 연동한 게시글 조회 API는 추후에 만들어볼 예정이다.
    */


    // private를 사용해 외부 컴포넌트에서 접근하지 못하게한다.
    // 게시글에 대한 정보는 Service 내에서만 필요로 하기 때문이다.
    

    /*
        게시글 조회 API Part.1-1
    */
    // 게시글 데이터의 타입은 Board 모델로 선언해준다. - 게시글 모델을 생성했음.
    private boards: Board[] = [];

    // 메소드의 return 타입을 Board 모델로 설정
    getAllBoards(): Board[]{
        return this.boards;
    }

    /*
        게시글 생성 API Part. 1-2
    */
   createBoard(title: string, description: string){
        const board: Board = {
            // uuid 모듈을 불러와 로컬에서 유니크한 id값으로 지정
            id: uuid(),
            title: title,
            description: description,
            status: BoardStatus.PUBLIC
        }

        // 생성된 게시글 정보를 return 한다.
        this.boards.push(board);
        return board;

   }
}
