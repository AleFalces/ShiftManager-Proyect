import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
  name: "Credentials",
})
export class Credential {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @OneToOne(() => User, (user) => user.credentials, { onDelete: "CASCADE" })
  user: User;
}
