// src/entity/Company.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // Add other columns as necessary
}
