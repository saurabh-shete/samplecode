/**
 * Automatic form generator, layouter, and state manager.
 * This module is intended to generate forms by taking a JSON schema
 * and generating controlled form inputs from the same.
 *
 * Currently this is a proof-of-concept that works on text fields, but
 * the concept can be extended to more complex fields with a richer schema
 * definition over time as per the use case.
 *
 * Note that the logic here is highly generic and abstract, and must account
 * for many edge cases. Any change here will have application-wide impact,
 * so this code should be thoroughly unit-tested (over time).
 *
 * @author Saunved <saunved@gmail.com>
 * @created 16 October, 2023
 * @module "components/forms/AutoForm"
 *
 */

import { useState, useContext, useEffect } from 'react';
import AutoField from './AutoField';
import { salesOrderContext } from '../../pages/sales-order/EditSalesOrderPoc';
export default function AutoForm ({ form }) {
    const context = useContext(salesOrderContext);
    const initialFormState = {};
    const fieldValidations = {};
    const initialErrorState = {};

    form.sections.forEach(section => {
        section.fields.forEach(field => {
            initialFormState[field.id] = { value: field.defaultValue || '' };
            initialErrorState[field.id] = [];
            fieldValidations[field.id] = field.validations;
        });
    });

    useEffect(() => {
        console.log(context.formState);
        context.setFormState(initialFormState);
    }, []);
    //const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors] = useState(initialErrorState);

    /**
     * Validates form fields and prepends errors to the error stack
     * @param {String} field
     * @param {Any} value
     * @returns {null} - Adds errors to the state per field
     */
    const validateField = (field, value) => {
        const _errors = [];
        fieldValidations[field].forEach(validation => {
            if (!validation.pass(value)) {
                _errors.push(validation.message);
            }
        });

        if (_errors.length) {
            setErrors({ ...errors, [field]: [..._errors].concat(errors[field]) });
            return;
        }

        setErrors({ ...errors, [field]: [] });
        return;
    };

    const updateField = (field, value) => {
        // Validate dirty fields onChange
        if (context.formState[field].dirty) {
            validateField(field, value);
        }

        context.setFormState({ ...context.formState, [field]: { id: field, value, dirty: true } });
        //console.log(context.formState);
    };

    const onChange = evt => {
        updateField(evt.target.name, evt.target.value);
    };

    /**
     * Some components may expose the onChange event by sending values directly instead of the raw HTML object.
     * In some cases, the "name" of the target may not be available.
     * This takes care of such scenarios.
     * @param {String} field
     * @param {String} value
     */
    const onValueChange = (field, value) => {
        updateField(field, value);
    };

    const onBlur = evt => {
        if (evt.target.name && evt.target.value) {
            validateField(evt.target.name, evt.target.value);
        }
    };

    // useEffect(() => {
    //     return () => {
    //         context.setFormState({ ...context.formState });
    //     };
    // }, []);

    return (
        <form className={form.formStyle}>
            {form.sections.map(section => {
                return (
                    <section key={section.name}>
                        <h2 className={section.sectionNameStyle}>{section.name}</h2>
                        <div className={section.layout.className}>
                            {section.fields.map(field => {
                                return (
                                    <AutoField
                                        key={field.id}
                                        field={field}
                                        fieldClass={section.layout.fieldClass}
                                        onChange={onChange}
                                        value={context.formState[field.id]?.value}
                                        onBlur={onBlur}
                                        errors={errors[field.id]}
                                        onValueChange={onValueChange}
                                        setSource={form.setSource}
                                    />
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </form>
    );
}
