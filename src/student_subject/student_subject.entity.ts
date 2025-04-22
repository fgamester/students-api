import { Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { Student } from "src/student/student.entity";
import { Subject } from "src/subject/subject.entity";

@Entity()
export class StudentSubject {
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    subject_id: number;

    @ManyToOne(() => Student, { onDelete: "CASCADE" })
    student: Student;

    @ManyToOne(() => Subject, { onDelete: "CASCADE" })
    subject: Subject;
}