import { call, put, takeEvery } from "redux-saga/effects";
//call用来调用异步函数
//put当异步函数执行得到结果了，去通知状态更新状态的时候去调用put,去作状态更新的时候调put
//负责在全局监听action

// 模拟登录
const UserService = {
  login(uname) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (uname === "Jerry") {
          resolve({ id: 1, name: "Jerry", age: 20 });
        } else {
          reject("用户名或密码错误");
        }
      }, 1000);
    });
  }
};

// worker Saga
//当函数名和函数关键字中间有一个*的时候，则这个函数就不是一个正常的函数，而是一个生成器函数
function* login(action) {
  try {
    yield put({ type: "requestLogin" });
    const result = yield call(UserService.login, action.uname);
    yield put({ type: "loginSuccess", result });
  } catch (message) {
    yield put({ type: "loginFailure", message });
  }
}

function* mySaga() {
  yield takeEvery("login", login);
}

export default mySaga;
