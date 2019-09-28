package co.nine.code;

import com.google.gson.Gson;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Optional;
import java.util.Scanner;

/**
 * Created By : Lalit The Coder of house Umbarkar, First of his name, Khalasar of UAC, King in the West.
 * Created On : 28 Sep 2019
 * Organisation: 9code
 */
public class Assistant {

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

        Optional<QAndA[]> optionalQAndAS = getQAndA();
        if (!optionalQAndAS.isPresent()) {
            System.err.println("Could not find Question and Answer file");
            return;
        }
        String line;
        sout("Hi.",
                "How may I help you?",
                "Ask me simple questions and I'll try to answer them. Just say 'bye' to quit.");
        while ((line = scanner.nextLine()) != null &&
                !line.toLowerCase().matches("(q|quit|end|close|bye)")) {

            boolean blurted = false;
            for (QAndA qAndA : optionalQAndAS.get()) {
                if (line.trim().toLowerCase().equals(qAndA.question.toLowerCase())) {
                    sout(qAndA.answer);
                    blurted = true;
                    break;
                }
            }
            if (!blurted)
                sout("I don't know answer to that.",
                        "Please ask me something easy.");
        }
        sout("Ok bye");
    }

    private static void sout(String... messages) {
        for (String message : messages) {
            System.out.println(message);
        }
    }


    private static Optional<QAndA[]> getQAndA() {

        URL resourceURL = Assistant.class.getClassLoader().getResource("q_and_a.json");
        if (resourceURL == null) {
            System.err.println("Could not find a resource");
            return Optional.empty();
        }

        Path filePath = new File(resourceURL.getPath()).toPath();
        try {
            Gson gson = new Gson();
            return Optional.of(gson.fromJson(Files.newBufferedReader(filePath), QAndA[].class));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    public static class QAndA {
        public String question;
        public String answer;
    }
}
