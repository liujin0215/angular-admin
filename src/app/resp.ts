export class Resp {
    constructor(
        public code: number,
        public data?: any,
        public err?: string,
    ) { }
}
