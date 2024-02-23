import { ApiMockResponse } from "../ApiMockData/dummyData";
import { IBoard } from "../Interfaces/Kanban";

// Data Layer
export class BoardAPI {
  async fetchBoardList(): Promise<IBoard[]> {
    const apiData: IBoard[] = ApiMockResponse;
    let BoardList: IBoard[] = [];

    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
      const users: { email: string; boards: IBoard[] }[] = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

      const userIndex = users.findIndex((user) => user.email === userEmail);
      
      if (userIndex !== -1) {
        BoardList = [...users[userIndex].boards] || [...apiData];
        updateLocalStorageBoards(BoardList);
      } else {
        console.error("Usuário não encontrado.");
      }
    }
    return BoardList;
  }
}

// Business Layer
export async function fetchBoardList(): Promise<IBoard[]> {
  const api = new BoardAPI();
  return api.fetchBoardList();
}

export function updateLocalStorageBoards(boards: IBoard[]) {
  const userEmail = localStorage.getItem("userEmail");

  if (userEmail) {
    const users: { email: string; boards: IBoard[] }[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );

    const userIndex = users.findIndex((user) => user.email === userEmail);

    if (userIndex !== -1) {
      users[userIndex].boards = [...boards];
    }

    localStorage.setItem("users", JSON.stringify(users));
  } else {
    console.error("Usuário não logado ao tentar atualizar os boards.");
  }
}