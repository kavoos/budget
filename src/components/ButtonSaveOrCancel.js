import { Button } from 'semantic-ui-react'

export const ButtonSaveOrCancel = () => {
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Save</Button>
        </Button.Group>
    )
}
