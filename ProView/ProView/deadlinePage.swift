//
//  deadlinePage.swift
//  ProView
//
//  Created by Patrik Duksin on 2021-05-09.
//

import SwiftUI

struct deadlinePage: View {
    @EnvironmentObject var viewRouter: ViewRouter
    var body: some View {
        GeometryReader { geometry in
            VStack {
                Spacer()
                Text("deadline")
                Spacer()
                bar(width: geometry.size.width, height: geometry.size.height, viewRouter: viewRouter)
            }
            .edgesIgnoringSafeArea(.bottom)
        }
        .padding(.horizontal, -4)
    }
}

struct deadlinePage_Previews: PreviewProvider {
    static var previews: some View {
        deadlinePage().environmentObject(ViewRouter())
    }
}
