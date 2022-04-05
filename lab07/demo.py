import http.server
import socketserver
PORT = 8001

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver. TCPServer(("", PORT), Handler)
        

print("Server at PORT", PORT)
httpd.serve_forever()

#https://www.youtube.com/watch?v=JT8gl6icU-k