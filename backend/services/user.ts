import DB from "./db";
import { User } from "../../api-types/user";

const utenteSchema = new DB.Schema<User>({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
});

const UtenteModel = DB.model("users", utenteSchema);


//PRENDE UTENTI DAL DB
export const getUsers = () => {
    return UtenteModel.find({});
};


/* SECONDA TASK */



/* TERZA TASK */