import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




function InputForm(props) {
    const { handleSubmit, schema } = props;

    return (
        <Formik
            initialValues={{
                query: ''
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isInvalid,
                errors,
            }) => (
                    <Form noValidate onSubmit={handleSubmit} className="search-bar">
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="firstName">
                                <Form.Label style={{ textAlign: "center" }}>
                                    <h4>Image Search</h4>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="query"
                                    placeholder="Keyword"
                                    value={values.query || ''}
                                    onChange={handleChange}
                                    isInvalid={errors.query}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.query}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit">Search</Button>
                    </Form>
                )}
        </Formik>







    )
}

export default InputForm;
