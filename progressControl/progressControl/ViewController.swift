//
//  ViewController.swift
//  progressControl
//
//  Created by Patrik Duksin on 2021-05-07.
//

import UIKit

class ViewController: UIViewController, UITextFieldDelegate{
    @IBOutlet weak var loginButton: UIButton!
    @IBOutlet weak var passwordCorrect: UILabel!
    @IBOutlet weak var loginField: UITextField!
    @IBOutlet weak var passwordField: UITextField!
    
    override func viewDidLoad() {
        passwordCorrect.isHidden = true
        super.viewDidLoad()
        loginButton.backgroundColor = UIColor(red: 0.10, green: 0.39, blue: 0.66, alpha: 1.00)
        hideKeyboardWhenTappedAround()
        loginButton.layer.cornerRadius = 8
        self.loginField.delegate = self
        self.passwordField.delegate = self
    }
    
    @IBAction func loginButtonClicked(_ sender: UIButton) {
        let loginComplete = true
        if loginComplete {
            let vc = storyboard?.instantiateViewController(identifier: "firstScreen")
            self.navigationController?.pushViewController(vc!, animated: true)
        } else {
            passwordCorrect.textColor = .red
            passwordCorrect.isHidden = false
        }
        
    }
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
                self.view.endEditing(true)
                return false
            }
}

extension UIViewController {
    func hideKeyboardWhenTappedAround() {
        let tap = UITapGestureRecognizer(target: self, action: #selector(UIViewController.dismissKeyboard))
        tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
    }
    
    @objc func dismissKeyboard() {
        view.endEditing(true)
    }
}
