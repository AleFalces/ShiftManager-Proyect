import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Turn } from "./Turns";
import { Credential } from "./Credential";

@Entity({
  name: "Users",
})
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 50,
  })
  email: string;

  @Column({ type: "bigint" })
  phone: number;

  @Column()
  type: string;

  @OneToOne(() => Credential, (credentials) => credentials.user, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  credentials: Credential;

  @OneToMany(() => Turn, (Turn) => Turn.user)
  turns: Turn[];
}
