import { seedData } from "./data";
import { connectDB, db } from "../config";
import { generateHashPassword } from "../utils";
import { Module, Privilege } from "../types";

const main = async () => {
  try {
    const {
      Roles: seedRoles,
      Modules: seedModules,
      Permissions: seedPermissions,
      Users: seedUsers,
    } = seedData;
    await connectDB();

    // Truncate entities
    await db.users.deleteMany();
    await db.permissions.deleteMany();
    await db.modules.deleteMany();
    await db.roles.deleteMany();

    // Seeding roles
    await db.roles.createMany({
      data: seedRoles,
    });

    // Seeding modules
    await db.modules.createMany({
      data: seedModules,
    });

    // Fetching created roles and modules
    const roles = await db.roles.findMany();
    const modules = await db.modules.findMany();

    // Seeding permissions
    const permissionsData: any[] = [];

    modules.forEach((module: any) => {
      seedPermissions.forEach((permission: any) => {
        permissionsData.push({
          roleId: roles[0].id,
          moduleId: module.id,
          status: permission.status,
          privilege: permission.privilege as Privilege,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });

    await db.permissions.createMany({ data: permissionsData });

    // Seeding users
    const usersData = seedUsers.map((user) => ({
      ...user,
      password: generateHashPassword(user.password),
      roleId: roles[0].id,
    }));
    await db.users.createMany({ data: usersData });

    console.log("Seed completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await db.$disconnect();
  }
};

main();
