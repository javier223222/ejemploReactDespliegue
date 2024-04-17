export interface IAdmin {
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    createdBy: string;
    updatedBy: string;
    updatedAt: Date;
    deletedAt: Date;
    deletedBy: string;
    isDeletd: boolean;

    
}