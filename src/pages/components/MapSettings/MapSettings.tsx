import { TransformStor } from "@/entities";
import { observer } from "mobx-react-lite";
import styles from "./MapSettings.module.css";
import { Button, Form, FormProps, Input } from 'antd/lib';
import Title from "antd/lib/typography/Title";
import { FieldType } from "@/types";
import { useEffect } from "react";

const MapSettings = observer(() => {
    const {
        store: { values, setParams },
    } = TransformStor;

    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        setParams(values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        form.setFieldsValue({
            srcPoint_1X: values.srcPoint_1X,
            srcPoint_1Y: values.srcPoint_1Y,
            srcPoint_2X: values.srcPoint_2X,
            srcPoint_2Y: values.srcPoint_2Y,
            srcPoint_3X: values.srcPoint_3X,
            srcPoint_3Y: values.srcPoint_3Y,

            changePoint_1X: values.changePoint_1X,
            changePoint_1Y: values.changePoint_1Y,
            changePoint_2X: values.changePoint_2X,
            changePoint_2Y: values.changePoint_2Y,
            changePoint_3X: values.changePoint_3X,
            changePoint_3Y: values.changePoint_3Y,

            angle: values.angle
        });
    }, [values]);

    return <>
        <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{
                srcPoint_1X: values.srcPoint_1X,
                srcPoint_1Y: values.srcPoint_1Y,
                srcPoint_2X: values.srcPoint_2X,
                srcPoint_2Y: values.srcPoint_2Y,
                srcPoint_3X: values.srcPoint_3X,
                srcPoint_3Y: values.srcPoint_3Y,

                changePoint_1X: values.changePoint_1X,
                changePoint_1Y: values.changePoint_1Y,
                changePoint_2X: values.changePoint_2X,
                changePoint_2Y: values.changePoint_2Y,
                changePoint_3X: values.changePoint_3X,
                changePoint_3Y: values.changePoint_3Y,

                angle: values.angle
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className={styles["form"]}
        >
            <div className={styles["form-block"]}>

                <div className={styles["form-item"]}>
                    <Title className={styles["item-title"]} level={4}>Исходная система</Title>
                    <div className={styles["item-content"]}>
                        <div className={styles["form-item-block"]}>

                            <Title className={styles.subTitle} level={5}>{"Точка 1:"}</Title>

                            <Form.Item<FieldType>
                                label={"x:"}
                                name="srcPoint_1X"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату X1!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>

                            <Form.Item<FieldType>
                                label={"y:"}
                                name="srcPoint_1Y"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату Y1!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>

                        </div>
                        <div className={styles["form-item-block"]}>

                            <Title className={styles.subTitle} level={5}>{"Точка 2:"}</Title>

                            <Form.Item<FieldType>
                                label={"x:"}
                                name="srcPoint_2X"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату X2!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>
                            <Form.Item<FieldType>
                                label={"y:"}
                                name="srcPoint_2Y"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату Y2!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>

                        </div>
                        <div className={styles["form-item-block"]}>

                            <Title className={styles.subTitle} level={5}>{"Точка 3:"}</Title>

                            <Form.Item<FieldType>
                                label={"x:"}
                                name="srcPoint_3X"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату X3!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>
                            <Form.Item<FieldType>
                                label={"y:"}
                                name="srcPoint_3Y"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату Y3!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>

                        </div>

                    </div>
                </div>




                <div className={styles["form-item"]}>
                    <Title className={styles["item-title"]} level={4}>Корректируемая система</Title>
                    <div className={styles["item-content"]}>
                        <div className={styles["form-item-block"]}>

                            <Title className={styles.subTitle} level={5}>{"Точка 1:"}</Title>

                            <Form.Item<FieldType>
                                label={"x:"}
                                name="changePoint_1X"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату X1!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>
                            <Form.Item<FieldType>
                                label={"y:"}
                                name="changePoint_1Y"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату Y1!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>

                        </div>
                        <div className={styles["form-item-block"]}>

                            <Title className={styles.subTitle} level={5}>{"Точка 2:"}</Title>

                            <Form.Item<FieldType>
                                label={"x:"}
                                name="changePoint_2X"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату X2!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>
                            <Form.Item<FieldType>
                                label={"y:"}
                                name="changePoint_2Y"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату Y2!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>

                        </div>
                        <div className={styles["form-item-block"]}>

                            <Title className={styles.subTitle} level={5}>{"Точка 3:"}</Title>

                            <Form.Item<FieldType>
                                label={"x:"}
                                name="changePoint_3X"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату X3!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>
                            <Form.Item<FieldType>
                                label={"y:"}
                                name="changePoint_3Y"
                                rules={[{ required: true, message: 'Пожалуйста, введите координату Y3!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>

                        </div>

                        <div className={styles["form-item-block"]}>

                            <Title className={styles.subTitle} level={5}>{"Поворот:"}</Title>

                            <Form.Item<FieldType>
                                label={"Угол:"}
                                name="angle"
                                rules={[{ required: true, message: 'Пожалуйста, введите угол поворота!' }]}
                                className={styles["input-wrapper"]}
                            >
                                <Input type="number" autoComplete="on" />
                            </Form.Item>

                        </div>

                    </div>
                </div>







            </div>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles["submit-btn"]}>
                <Button type="primary" htmlType="submit">
                    {/* <Button disabled={!mooeDoc || !mooeStr ? true : false} type="primary" htmlType="submit"> */}
                    Применить
                </Button>
            </Form.Item>


        </Form>
    </>
});

export default MapSettings;