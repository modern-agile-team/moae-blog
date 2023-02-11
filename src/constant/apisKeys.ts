const USER = {
  SIGN_IN: "SIGN_IN",
  CHECK: "CHECK_USER",
  REFRESH: "GET_REFRESH_TOKEN",
};

const BOARDS = {
  GET_ALL: "GET_ALL_BOARD",
  CREATE: "CREATE_POST",
  GET_POST: "GET_POST",
  MODIFY: "MODIFY_POST",
  DELETE: "DELETE_POST",
};

const COMMENT = {
  GET_COMMENT: "GET_COMMENT",
  CREATE: "CREATE_COMMENT",
  MODIFY: "MODIFY_COMMENT",
  DELETE: "DELETE_COMMENT",
};

const apisKeys = {
  USER: USER,
  BOARDS: BOARDS,
  COMMENT: COMMENT,
} as const;

export default apisKeys;