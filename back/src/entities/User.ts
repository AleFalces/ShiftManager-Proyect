import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  credentialsId: string;
}
