import { PayloadAction } from "@reduxjs/toolkit";
import filesReducer, { addActiveFile, initialState, removeActiveFile, setFiles, updateFileCode } from "./reducer";

describe("files reducer", () => {
  test("should return the initial state if no known action is provided", () => {
    expect(filesReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });

  test("should set user files when actioin is setFiles", () => {
    const userFiles = [
      {
        id: "1",
        name: "index.js",
        relativePath: "test/index.js",
        code: 'console.log("hello world")',
        extension: ".js",
      },
    ];

    const expectedState = {
      ...initialState,
      activeFiles: [],
      userFiles,
    };

    expect(filesReducer(initialState, setFiles(userFiles))).toEqual(expectedState);
  });

  test("should add a new file id when action is addActiveFile", () => {
    const fileId = "1";
    const expectedState = {
      ...initialState,
      activeFiles: [fileId],
    };
    expect(filesReducer(initialState, addActiveFile(fileId))).toEqual(expectedState);
  });
  test("should remove a file id when action is removeActiveFile", () => {
    const field = "1";
    const modifiedInitialState = {
      ...initialState,
      activeFiles: [field],
    };
    const expectedState = {
      ...initialState,
      activeFiles: [],
    };
    expect(filesReducer(modifiedInitialState, removeActiveFile(field))).toEqual(expectedState);
  });

  test("should update the code of a file when action is updateFileCode", () => {
    const payload = {
      fileId: "1",
      newCode: 'print("Hello World")',
    };

    const modifieldIniialState = {
      ...initialState,
      userFiles: [
        {
          id: "1",
          code: 'console.log("Hello World")',
          name: "index.js",
          relativePath: "test/index.js",
          extension: "js",
        },
      ],
    };

    const expectedState = {
      ...initialState,
      userFiles: [
        {
          id: "1",
          code: 'print("Hello World")',
          name: "index.js",
          relativePath: "test/index.js",
          extension: "js",
        },
      ],
    };
    expect(filesReducer(modifieldIniialState, updateFileCode(payload))).toEqual(expectedState);
  });
});
