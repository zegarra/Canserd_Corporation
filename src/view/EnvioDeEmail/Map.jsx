
function Map() {
  return (
    <div className="w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5288738020563!2d-77.06276812402128!3d-12.007066841164711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce300d8854e1%3A0x6a1b58f36fcc79a6!2sPlaza%20Norte!5e0!3m2!1ses-419!2spe!4v1731471087870!5m2!1ses-419!2spe"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
  )
}

export default Map