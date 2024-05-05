import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from './../../user/schemas/user.schema';

@Schema({ timestamps: true })
export class Result extends Document {

    @Prop({ required: true })
    result: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
    userId: string;

}

export const ResultSchema = SchemaFactory.createForClass(Result);

function populateMiddleware(next: Function) {
    this.populate({
        path: "userId",
        select: "-_id fullname email ",
    });
    next();
}


ResultSchema.pre("find", populateMiddleware);
