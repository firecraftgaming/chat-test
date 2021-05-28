export interface UserModel {
    id: string;
    username: string;
    displayName: string;
}

export interface ChatMessageModel {
    from: UserModel;
    id: string;
    message: string;
}

