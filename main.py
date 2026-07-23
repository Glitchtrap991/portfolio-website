from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

#Database configuration
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'

@app.route('/')
def home():
    return "Welcome to the Employee Management API"

#Actual DB

db = SQLAlchemy(app)

class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    position = db.Column(db.String(120), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'position': self.position
        }

with app.app_context():
    db.create_all()

#Routes
@app.route('/Employees', methods=['GET'])
def get_employees():
    employees = Employee.query.all()
    return jsonify([employee.to_dict() for employee in employees])

@app.route('/Employees/<int:empid>', methods=['GET'])
def get_employee(empid):
    employee = Employee.query.get(empid)
    if employee:
        return jsonify(employee.to_dict())
    else:
        return jsonify({'error': 'Employee not found'}), 404

@app.route('/Employees', methods=['POST'])
def add_employee():
    data=request.get_json()
    new_employee = Employee(name=data['name'], position=data['position'])
    db.session.add(new_employee)
    db.session.commit()
    return jsonify(new_employee.to_dict()), 201

@app.route('/Employees/<int:empid>', methods=['PUT'])
def update_employee(empid):
    data=request.get_json()
    employee = Employee.query.get(empid)
    if employee:
        employee.name = data.get('name', employee.name)
        employee.position = data.get('position', employee.position)
        db.session.commit()
        return jsonify(employee.to_dict())
    else:
        return jsonify({'error': 'Employee not found'}), 404

@app.route('/Employees/<int:empid>', methods=['DELETE'])
def delete_employee(empid):
    data=request.get_json()
    employee=Employee.query.get(empid)
    if employee:
        db.session.delete(employee)
        db.session.commit()
        return jsonify({'message': 'Employee deleted successfully'})
    else:
        return jsonify({'error': 'Employee not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)