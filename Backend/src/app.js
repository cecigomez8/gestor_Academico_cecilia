// Middlewares
app.use(cors()); //Cada petición que llegue podrá enviar y recibir datos
app.use(morgan('dev'));
app.use(express.json());



// Routes
//app.use('/api/student', require('./routes/student'));
app.use('/api/teacher', require('./routes/teachers'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/users', require('./routes/users'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

module.exports = app;