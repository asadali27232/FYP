import torch
from torch import nn

class ECGClassifier(nn.Module):
    def __init__(self, signal_channel_size, gru_hidden_size, per_cat_nunique, embed_size, num_size, hidden, n_outs):
        super().__init__()
        
        self.gru1 = nn.GRU(signal_channel_size, gru_hidden_size, batch_first=True, bidirectional=True)
        
        self.embeds = []
        self.per_cat_nunique = per_cat_nunique
        for v in self.per_cat_nunique:
            self.embeds += [nn.Embedding(v, embed_size)]
        self.embeds = nn.ModuleList(self.embeds)
        
        self.dense1 = nn.Linear(gru_hidden_size*4 + embed_size*len(per_cat_nunique) + num_size, hidden)
        self.relu = nn.ReLU()
        self.out = nn.Linear(hidden, n_outs)
        
    def forward(self, signal, num_meta, cat_meta):
        signal = signal.view(signal.shape[0], signal.shape[1], -1)
        signal, _ = self.gru1(signal)
        
        avg_pool = torch.mean(signal, 1)
        max_pool, _ = torch.max(signal, 1)
        
        cat_feats = []
        for i, embed in enumerate(self.embeds):
            cat_feats += [embed(cat_meta[:, i].long())]
        cat_feats = torch.cat(cat_feats, 1) 
        
        x = torch.cat([avg_pool, max_pool, cat_feats, num_meta], 1)
        x = self.dense1(x)
        x = self.relu(x)
        x = self.out(x)
        
        return x
