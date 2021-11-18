//***MENSAJE QUE SE ENVIA***/

const MyMessage = ({ message }) => {
  //verificar si el mensaje que se envia es una imagen
    if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
      //se retorna el contenido del mensaje
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#0672E5' }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
