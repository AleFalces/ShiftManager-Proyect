import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({
  name: "credentials",
})
export class Credential {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  username: string;

  @Column()
  password: string;
}
