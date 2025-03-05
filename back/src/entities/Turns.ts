import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity({
  name: "Turns",
})
export class Turn {
  @PrimaryGeneratedColumn("uuid")
  turnId: string;

  @Column()
  day: string;

  @Column()
  time: string;

  @Column()
  status: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.turns)
  user: User;
}
