import { Form } from 'semantic-ui-react'
import { ButtonSaveOrCancel } from './ButtonSaveOrCancel'

export const NewEntryForm = () => {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon="tag"
                    width={12}
                    label="Description"
                    placeholder="new shinny thing"
                />
                <Form.Input
                    icon="euro"
                    iconPosition="left"
                    width={4}
                    label="Value"
                    placeholder="100"
                />
            </Form.Group>
            <ButtonSaveOrCancel />
        </Form>
    )
}
