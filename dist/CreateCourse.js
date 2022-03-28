"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration = 8, name, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService;
