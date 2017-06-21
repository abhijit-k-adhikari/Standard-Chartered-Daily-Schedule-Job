export class MainData {
    constructor(
        public tileType: string,
        public display: string,
        public url: string
    ) { }
}

export let MAIN_DATA: MainData[] = [
    { tileType: "AccessRights" , display: "Access Rights", url: "accessrights" }
];

