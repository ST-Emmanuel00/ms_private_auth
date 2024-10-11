export const seedData = {
  Roles: [
    {
      name: "administrador",
      description:
        "Tiene acceso completo al sistema y puede realizar cualquier tarea y configuración.",
      status: true,
    },
    {
      name: "cajero",
      description:
        "Encargado de las transacciones financieras y las operaciones en caja.",
      status: true,
    },
    {
      name: "cocinero",
      description:
        "Responsable de preparar y cocinar los alimentos en la cocina.",
      status: true,
    },
    {
      name: "mesero",
      description:
        "Atiende a los clientes en el área de comedor, toma pedidos y sirve los platos.",
      status: true,
    },
  ],

  Users: [
    {
      name: "John",
      lastName: "Doe",
      docType: "DNI",
      docNumber: "12345678",
      sex: "Male",
      email: "john@example.com",
      phoneNumber: "123456789",
      password: "hashedpassword458",
      birthday: new Date("1990-01-01"),
      status: true,
      online: false,

    },
    {
      name: "Jane",
      lastName: "Doe",
      docType: "DNI",
      docNumber: "87654321",
      sex: "Female",
      email: "jane@example.com",
      phoneNumber: "987654321",
      password: "123456789",
      birthday: new Date("1995-05-15"),
      status: true,
      online: false,

    },
    {
      name: "Michael",
      lastName: "Smith",
      docType: "Passport",
      docNumber: "23456789",
      sex: "Male",
      email: "michael@example.com",
      phoneNumber: "234567890",
      password: "password123",
      birthday: new Date("1985-06-20"),
      status: true,
      online: false,

    },
    {
      name: "Emily",
      lastName: "Johnson",
      docType: "DNI",
      docNumber: "34567890",
      sex: "Female",
      email: "emily@example.com",
      phoneNumber: "345678901",
      password: "securepassword",
      birthday: new Date("1992-03-10"),
      status: true,
      online: false,

    },
    {
      name: "William",
      lastName: "Brown",
      docType: "DNI",
      docNumber: "45678901",
      sex: "Male",
      email: "william@example.com",
      phoneNumber: "456789012",
      password: "password1234",
      birthday: new Date("1988-11-25"),
      status: true,
      online: false,

    },
    {
      name: "Olivia",
      lastName: "Miller",
      docType: "Passport",
      docNumber: "56789012",
      sex: "Female",
      email: "olivia@example.com",
      phoneNumber: "567890123",
      password: "securepassword123",
      birthday: new Date("1997-08-05"),
      status: true,
      online: false,

    },
    {
      name: "James",
      lastName: "Davis",
      docType: "DNI",
      docNumber: "67890123",
      sex: "Male",
      email: "james@example.com",
      phoneNumber: "678901234",
      password: "password5678",
      birthday: new Date("1986-04-15"),
      status: true,
      online: false,

    },
    {
      name: "Sophia",
      lastName: "Wilson",
      docType: "DNI",
      docNumber: "78901234",
      sex: "Female",
      email: "sophia@example.com",
      phoneNumber: "789012345",
      password: "password9876",
      birthday: new Date("1993-09-30"),
      status: true,
      online: false,

    },
  ],
  Modules: [

    {
      name: "tables",
      status: true,
      createdAt: new Date("1993-09-30"),
    },
    {
      name: "users",
      status: true,
      createdAt: new Date("1993-09-30"),
    },
    // {
    //   name: "auth",
    //   status: true,
    //   createdAt: new Date("1993-09-30"),
    // },
    {
      name: "roles",
      status: true,
      createdAt: new Date("1993-09-30"),
    },
    {
      name: "permissions",
      status: true,
      createdAt: new Date("1993-09-30"),
    },

  ],

  Permissions: [
    {
      status: true,
      createdAt: new Date(),
      privilege: "GET",
    },
    {
      status: true,
      createdAt: new Date(),
      privilege: "POST",
    },
    {
      status: true,
      createdAt: new Date(),
      privilege: "PUT",
    },
    {
      status: true,
      createdAt: new Date(),
      privilege: "DELETE",
    },
  ],
};
