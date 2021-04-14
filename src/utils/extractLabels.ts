import { Tag } from '../components/SampleSubmissionForm/types';

export const extractLabels = (data: any) => {
    return data.map((item: any) => item.label);
}