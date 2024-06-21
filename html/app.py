from flask import Flask, request, render_template_string

app = Flask(__name__)

@app.route('/html/registration', methods=['POST'])
def register():
    username = request.form['username']
    return f'Received username hue hue: {username}'

@app.route('/')
def index():
    return '''
    <form action="/html/registration" method="post">
        <input type="text" name="username">
        <input type="submit">
    </form>
    '''

if __name__ == '__main__':
    app.run(debug=True)
