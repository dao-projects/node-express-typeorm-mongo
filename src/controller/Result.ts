/**
 * console.log(Results.success("xxxxxxxxxxx"))
 * console.log(Results.result("未知信息"))
 * console.log(Results.result({code: 203, data: 'xxx', msg: "重新请求"}))
 * console.log(Results.SERVER_ERROR)
 */
export class Result {
    code: number | 200;
    msg: string | "请求成功！";
    data: any[] | "data is not";

    constructor(code = 200, data = null, msg = '请求成功！') {
        this.code = code;
        this.data = data;
        this.msg = msg;
    }

    /**
     * 服务异常
     * @example
     *      Result.SERVER_ERROR
     */
    public static SERVER_ERROR = new Result(10001, null, "服务端异常！");
    //
    /**
     * 服务成功
     * @example
     *      Result.SERVER_SUCCESS
     */
    public static SERVER_SUCCESS = new Result(200, null, "请求成功！");

    /**
     * 响应成功后的数据
     * @param data 返回数据
     * @example
     *      Result.success([{username:"张山"},{username:"李四"}])  => {code:200,data:[{username:"张山"},{username:"李四"}],msg:"请求成功"}
     */
    public static success(data) {
        return new Result(200, data, "请求成功！");
    }

    /**
     * 响应错误状态及提示
     * @param code 状态吗
     * @param msg 信息
     * @example
     *      Result.error(302,'操作权限不足！')  => {code:302, null, msg:"操作权限不足！"}
     */
    public static error(code = 10001, msg = "服务端异常！") {
        return new Result(code, null, msg);
    }

    /**
     * 响应其它提示信息
     * @param res Object
     * @example
     *    Result.result("登录失败，请检查账号是否正确！")  =>  {code:200,data:null,msg:"登录失败，请检查账号是否正确！"}
     *    Result.result({code:200,data:null,msg:"登录失败，请检查账号是否正确！"})  =>  {code:200,data:null,msg:"登录失败，请检查账号是否正确！"}
     */
    public static result(res) {
        let {code = 200, data = null, msg} = res
        msg = typeof res === 'object' ? msg : res;
        return new Result(code, data, msg)
    }
}

//====================================================================
// console.log(Result.success("hello 小老弟"))
// console.log(Result.success([{info:"hello 小老弟"}]))
// console.log(Result.error(Result.SERVER_ERROR))
// console.log(Result.result({code: 123, msg: "xxxx", data: {a: 123}}))
// export class CodeMsg {
//     code: number;
//     msg: string;
//     public static SERVER_ERROR = new CodeMsg(500100, "服务端异常");
//     constructor(code: number, msg: string) {
//         this.code = code;
//         this.msg = msg;
//     }
//     public getCode(): number {
//         return this.code;
//     }
//     public getMsg(): string {
//         return this.msg;
//     }
// }
// export class Result<T> {
//     code: number;
//     msg: string;
//     data: <T>() => any;
//     constructor(data) {
//         this.code = 200;
//         this.msg = "请求成功！";
//         this.data = data;
//     }
//     public static SERVER_ERROR = CodeMsg.SERVER_ERROR;
//     public static success<T>(data) {
//         return new Result<T>(data);
//     }
//     public static error<T>(codeMsg: CodeMsg) {
//         return new Result<T>(codeMsg);
//     }
//     public static result<T>(res) {
//         return new Result<T>(res)
//     }
//     private Result(codeMsg: CodeMsg) {
//         if (codeMsg == null) {
//             return;
//         }
//         this.code = codeMsg.getCode();
//         this.msg = codeMsg.getMsg();
//     }
//     public getCode(): number {
//         return this.code;
//     }
//     public getMsg(): string {
//         return this.msg;
//     }
//     public getData(): <T>() => any {
//         return this.data;
//     }
// }

//====================================================================
// class Person<T> {
//     name: string | undefined
//     age: number | 0
//     data: T;
//     constructor(data: T) {
//         // const {name=undefined,age=null}=this;
//         // let obj=typeof data === 'object' ?  data: {data}
//         // return {name,age,...obj}
//         this.name="xxx"
//         this.age=18
//         this.data=data
//     }
//     public static info<T>(data) {
//         return new Person<T>(data);
//     }
// }
// class User {
//     user: any[];
//     constructor(user) {
//         this.user = user
//     }
// }
// // User==> Person { name: 'xxx', age: 18, data:User{data: { username: '张先生' }} }
// console.log(Person.info(new User({mes: "Person.info"})))
// //Person=> Person { name: 'xxx', age: 18, data: { username: '张先生' } }
// console.log(Person.info<User>({mes: "Person.info<User>"}))
// // User=>User { user: { mss: 'xxx' } }
// console.log(new User({mes:"new User"}))
// console.log(Person.info({mes:"Person.info"}))
