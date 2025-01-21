import Router from "@koa/router";
import { getUsers} from "../services/user";

const router = new Router({
    prefix: "/users"
});

router.get("/", async (ctx) => {
    ctx.accepts("json");
    const response = await getUsers();
    ctx.response.body = response;
});


/* TERZA TASK */

export default router;