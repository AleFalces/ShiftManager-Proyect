import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
  name: "Turns",
})
export class Turn {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("date")
  date: Date;

  @Column()
  status: string;

  @Column()
  time: string;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.turns)
  user: User;
}
