
import { Box, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";
import { ChangeEvent, memo,ReactNode,useEffect,useState,VFC } from "react";
import { User } from "../../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";


type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user,isOpen, onClose, isAdmin= false } = props;

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setUsername(user?.username ?? "")
    setName(user?.name ?? "")
    setEmail(user?.email ?? "")
    setPhone(user?.phone ?? "")
  },[user])

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
  

  const onClickUpdate = () => alert()

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}
    motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>name</FormLabel>
              <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUserName}/>
            </FormControl>
            <FormControl>
              <FormLabel>fullname</FormLabel>
              <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName}/>
            </FormControl>
            <FormControl>
              <FormLabel>mail</FormLabel>
              <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail}/>
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone}/>
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
         <ModalFooter>
           <PrimaryButton onClick={onClickUpdate}>reload</PrimaryButton>
         </ModalFooter>
        )}

      </ModalContent>
    </Modal>
  )
})
