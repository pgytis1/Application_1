import * as React from 'react';
import List from 'material-ui/List';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import DeleteIcon from 'material-ui-icons/Delete';

export default () => {
    return (
        <List >
            <ListItem button={true}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button={true}>
                <ListItemIcon>
                    <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button={true}>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Send mail" />
            </ListItem>
            <ListItem button={true}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItem>
        </List>
    );
};