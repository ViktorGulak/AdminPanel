const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const upload = require("../middleware/upload");

router.get("/user", userController.getUsers); // Получить
router.post("/user", upload.single("photo"), userController.createUser); // Создать
router.patch("/user", upload.single("photo"), userController.updateUser); // Изменить
router.delete("/user", userController.deleteUser); // Удалить

module.exports = router;
