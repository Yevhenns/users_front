import { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../../stories/Button';
import Input from '../../stories/Input';
import css from './Form.module.scss';

const Form: FC = () => {
  const schema = yup.object({
    name: yup.string().required(),
    age: yup.string().required(),
  });
  type FormData = yup.InferType<typeof schema>;

  const defaultValues: FormData = {
    name: '',
    age: '',
  };

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormData> = async ({ name, age }) => {
    try {
      await newUser({
        variables: {
          userInfo: { name, age },
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      if (!loading) {
        setUsers(dataQuery.users);
      }
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.formWrapper}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input placeholder="Name" {...field} />}
        />
        <Controller
          name="age"
          control={control}
          render={({ field }) => <Input placeholder="Age" {...field} />}
        />
      </div>
      <div className={css.buttonWrapper}>
        <Button type="submit">Add</Button>
        <Button>Find</Button>
      </div>
    </form>
  );
};

export default Form;
