//
//  loginPage.swift
//  ProView
//
//  Created by Patrik Duksin on 2021-05-09.
//

import SwiftUI
let lightGreyColor = Color(red: 239.0/255.0, green: 243.0/255.0, blue: 244.0/255.0, opacity: 1.0)
let storedUsername = "admin"
let storedPassword = "admin"

struct loginPage: View {
    @EnvironmentObject var viewRouter: ViewRouter
    @State private var username: String = ""
    @State private var password: String = ""
    @State var authenticationDidFail: Bool = false
    @State var authenticationDidSucceed: Bool = false
    var body: some View {
        ZStack {
            VStack {
                welcomeText()
                welcomeImage()
                usernameTextField(username: $username)
                passwordTextField(password: $password)
                if authenticationDidFail {
                    Text("the information not correct. Try again.")
                        .offset(y: -10)
                        .foregroundColor(.red)
                }
                if authenticationDidSucceed {
                    Text("Login succeeded!")
                        .font(.headline)
                        .frame(width: 250, height: 80)
                        .background(Color.green)
                        .cornerRadius(20.0)
                        .foregroundColor(.white)
                        .animation(Animation.default)
                }
                Button(action: {
                    if self.username == storedUsername && self.password == storedPassword {
                        self.authenticationDidSucceed = true
                        self.authenticationDidFail = false
                        UIApplication.shared.endEditing()
                        withAnimation {
                            viewRouter.currentPage = .generalPage
                        }
                    } else {
                        self.authenticationDidFail = true
                    }
                }){ loginButtonContent() }
                
            }
        .padding()
        .background(bubble, alignment: .topLeading)
        .background(bubble.rotationEffect(Angle(degrees: 180)), alignment: .bottomTrailing)
        .ignoresSafeArea()
        }
    }

    @State private var startAnimation: Bool = false
    var bubble: some View {
        ZStack {
            Circle()
                .fill(Color(red: 104 / 255, green: 222 / 255, blue: 201 / 255, opacity: 0.55))
                .frame(width: 300, height: 300, alignment: .topLeading)
                .padding(.top, 600)
                .offset(x: startAnimation ? -110 : -100, y: startAnimation ? -180 : -150)
            Circle()
                .fill(Color(red: 248 / 255, green: 64 / 255, blue: 97 / 255, opacity: 0.80))
                .frame(width: 300, height: 300, alignment: .topLeading)
                .padding(.top, 600)
                .offset(x: startAnimation ? -180 : -150, y: startAnimation ? -90 : -100)
        }
        .onAppear() { startAnimation = true }
        .animation(.easeInOut(duration: 3.0).repeatForever(autoreverses: true))
        
    }
}

struct welcomeText: View {
    var body: some View {
        Text("Welcome!")
            .font(.largeTitle)
            .fontWeight(.semibold)
            .padding(.bottom, 20)
    }
}

struct welcomeImage: View {
    var body: some View {
            Image("inputLogo")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: 100, height: 100)
                .clipped()
                .cornerRadius(100)
                .padding(.bottom, 32)

    }
}

struct loginButtonContent: View {
    var body: some View {
        Text("LOGIN")
            .font(.headline)
            .foregroundColor(.white)
            .padding()
            .frame(width: 220, height: 60)
            .background(Color(red: 25 / 255, green: 99 / 255, blue: 168 / 255, opacity: 1))
            .cornerRadius(15.0)
            .animation(Animation.default)
    }
}

struct usernameTextField: View {
    @Binding var username: String
    var body: some View {
        TextField("Username", text: $username)
            .padding()
            .background(lightGreyColor)
            .cornerRadius(5.0)
            .padding(.bottom, 20)
    }
}

struct passwordTextField: View {
    @Binding var password: String
    var body: some View {
        SecureField("Password", text: $password)
            .padding()
            .background(lightGreyColor)
            .cornerRadius(5.0)
            .padding(.bottom, 20)
    }
}

struct loginPage_Previews: PreviewProvider {
    static var previews: some View {
        loginPage().environmentObject(ViewRouter())
    }
}

extension UIApplication {
    func endEditing() {
        sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
    }
}
