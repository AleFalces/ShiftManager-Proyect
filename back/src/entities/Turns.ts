import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EStatus } from "../interfaces/ITurns";

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
  userId: number;
}
