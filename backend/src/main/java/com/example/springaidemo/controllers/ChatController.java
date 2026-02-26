package com.example.springaidemo.controllers;

import com.example.springaidemo.models.ResponseModel;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/user")
public class ChatController {

    private final ChatClient geminiClient;

    public ChatController(ChatClient geminiClient) {
        this.geminiClient = geminiClient;
    }


    @GetMapping("/chat")
    public ResponseModel getGeminiMessage(@RequestParam("message") String message, @RequestHeader("username") String username) {
        return geminiClient
                .prompt(message)
                .advisors(advisorSpec -> {
                    advisorSpec.param(ChatMemory.CONVERSATION_ID, username);
                })
                .call()
                .entity(ResponseModel.class);
    }
}
