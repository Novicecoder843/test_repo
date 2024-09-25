import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Company } from "./entity/Company"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5430,
    username: "pix_user",
    password: "pixservice123",
    database: "pix_reaction_db",
    synchronize: true,
    logging: false,
    entities: [User,Company],
    migrations: [],
    subscribers: [],
})
