//
//  profilePage.swift
//  ProView
//
//  Created by Patrik Duksin on 2021-05-09.
//

import SwiftUI

struct profilePage: View {
    @State var progressValue: Float = 0.3
    @State var progressValue1: Float = 0.7
    @State var progressValue2: Float = 0.2
    var body: some View {
        ZStack {
            Color(red: 255 / 255, green: 255 / 255, blue: 1, opacity: 1).edgesIgnoringSafeArea(.all)
            List {
                
                ZStack {
                    Color(red: 252 / 255, green: 253 / 255, blue: 1, opacity: 1).edgesIgnoringSafeArea(.all)
                    cardView(image: "profilePhoto", name: "Patrik Duksin", bio: "Учусь прогать , люблю путешествия, люблю ебанные хакатоны, а еще канал в тг веду t.me/patriklife")
                        .padding(.top, 10)
                        .shadow(color: Color.black.opacity(0.4), radius: 20, x: /*@START_MENU_TOKEN@*/0.0/*@END_MENU_TOKEN@*/, y: 10)
                        .shadow(color: Color.black.opacity(0.4), radius: 5, x: /*@START_MENU_TOKEN@*/0.0/*@END_MENU_TOKEN@*/, y: 5)
                }
                ZStack {
                    Color(red: 252 / 255, green: 253 / 255, blue: 1, opacity: 1).edgesIgnoringSafeArea(.all)
                    VStack {
                        Text ("Опыт в разработке")
                            .font(.title)
                            .fontWeight(.bold)
                            .padding()
                        VStack {
                            VStack {
                                ProgressBar(value: $progressValue).frame(height: 20)
                            }
                            .padding()
                        }
                    }
                }
                .cornerRadius(20)
                .padding(.top, 10)
                .shadow(color: Color.black.opacity(0.4), radius: 20, x: 0.0, y: 10)
                .shadow(color: Color.black.opacity(0.4), radius: 5, x: /*@START_MENU_TOKEN@*/0.0/*@END_MENU_TOKEN@*/, y: 5)
                
                ZStack {
                    Color(red: 252 / 255, green: 253 / 255, blue: 1, opacity: 1).edgesIgnoringSafeArea(.all)
                    VStack {
                        Text ("Рзабираюсь в")
                            .font(.title)
                            .fontWeight(.bold)
                            .padding()
                        VStack {
                            VStack {
                                Text ("Swift")
                                    .font(.title2)
                                    .fontWeight(.medium)
                                ProgressBar(value: $progressValue).frame(height: 20)
                            }
                            .padding()
                            VStack {
                                Text ("Python")
                                    .font(.title2)
                                    .fontWeight(.medium)
                                ProgressBar(value: $progressValue1).frame(height: 20)
                            }
                            .padding()
                            VStack {
                                Text ("C++")
                                    .font(.title2)
                                    .fontWeight(.medium)
                                ProgressBar(value: $progressValue2).frame(height: 20)
                            }
                            .padding()
                        }
                    }
                }
                .cornerRadius(20)
                .padding(.top, 10)
                .shadow(color: Color.black.opacity(0.4), radius: 20, x: /*@START_MENU_TOKEN@*/0.0/*@END_MENU_TOKEN@*/, y: 10)
                .shadow(color: Color.black.opacity(0.4), radius: 5, x: /*@START_MENU_TOKEN@*/0.0/*@END_MENU_TOKEN@*/, y: 5)
            }
        }
    }
}

struct profilePage_Previews: PreviewProvider {
    static var previews: some View {
        profilePage()
    }
}

struct ProgressBar: View {
    @Binding var value: Float
    
    var body: some View {
        GeometryReader { geometry in
            ZStack(alignment: .leading) {
                Rectangle().frame(width: geometry.size.width , height: geometry.size.height)
                    .opacity(0.3)
                    .foregroundColor(Color(UIColor.systemTeal))
                
                Rectangle().frame(width: min(CGFloat(self.value)*geometry.size.width, geometry.size.width), height: geometry.size.height)
                    .foregroundColor(Color(red: 40 / 255, green: 45 / 255, blue: 53 / 255, opacity: 1))
                    .animation(.linear)
            }.cornerRadius(45.0)
        }
    }
}

struct cardView: View {
    var image: String
    var name: String
    var bio: String
    var body: some View {
        VStack {
            Image(image)
                .resizable()
                .aspectRatio(contentMode: .fill)
                .frame(width: 200, height: 200)
                .clipped()
                .cornerRadius(200)
                .padding(.top, 10)
            HStack {
                VStack(alignment: .leading) {
                    Text(name)
                        .font(.title)
                        .fontWeight(.bold)
                        .foregroundColor(Color(red: 221 / 255, green: 221 / 255, blue: 221 / 255))
                        .padding(.bottom, 1)
                        .padding(.leading, 5)
                    Text(bio)
                        .font(.title3)
                        .fontWeight(.regular)
                        .foregroundColor(Color(red: 167 / 255, green: 168 / 255, blue: 170 / 255))
                        .lineLimit(8)
                        .padding(.leading, 5)
                        .padding(.trailing, 5)
                }
                .layoutPriority(100)
                Spacer()
            }
            .padding()
        }
        .background(Color(red: 40 / 255, green: 45 / 255, blue: 53 / 255))
        .cornerRadius(20)
        .overlay(
            RoundedRectangle(cornerRadius: 10)
                .stroke(Color(.sRGB, red: 150/255, green: 150/255, blue: 150/255, opacity: 0.1), lineWidth: 1))
        .padding([.top, .horizontal, .bottom])
    }
}
